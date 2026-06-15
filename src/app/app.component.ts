import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Rates = Record<string, number>;

interface ApiResponse {
  result: string;
  base_code: string;
  time_last_update_utc: string;
  rates: Rates;
}

interface ConversionHistory {
  amount: number;
  from: string;
  to: string;
  result: number;
  date: string;
  rate: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);
  private apiUrl = 'https://open.er-api.com/v6/latest';
  private cacheKey = 'angularcoin-cache';
  private historyKey = 'angularcoin-history';

  amount = 1;
  fromCurrency = 'USD';
  toCurrency = 'BRL';
  result: number | null = null;
  currentRate: number | null = null;
  currencies: string[] = ['USD', 'BRL', 'EUR', 'GBP', 'JPY', 'ARS', 'CAD', 'AUD'];
  rates: Rates = {};
  lastUpdate = '';
  loading = false;
  offlineMode = false;
  errorMessage = '';
  history: ConversionHistory[] = [];

  ngOnInit(): void {
    this.loadHistory();
    this.loadRates();
  }

  loadRates(): void {
    this.loading = true;
    this.errorMessage = '';
    this.http.get<ApiResponse>(`${this.apiUrl}/${this.fromCurrency}`).subscribe({
      next: (data) => {
        if (data.result === 'success' && data.rates) {
          this.rates = data.rates;
          this.currencies = Object.keys(data.rates).sort();
          this.lastUpdate = data.time_last_update_utc;
          this.offlineMode = false;
          localStorage.setItem(this.cacheKey, JSON.stringify({
            base: this.fromCurrency,
            rates: this.rates,
            lastUpdate: this.lastUpdate
          }));
          this.convert(false);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.useCachedRates();
      }
    });
  }

  useCachedRates(): void {
    const cached = localStorage.getItem(this.cacheKey);
    if (!cached) {
      this.errorMessage = 'Não foi possível buscar as cotações e não há dados salvos offline.';
      return;
    }

    const data = JSON.parse(cached) as { base: string; rates: Rates; lastUpdate: string };
    this.rates = data.rates;
    this.lastUpdate = data.lastUpdate;
    this.offlineMode = true;
    this.errorMessage = 'Sem conexão com a API. Usando as últimas taxas salvas no dispositivo.';
    this.convert(false);
  }

  onCurrencyChange(): void {
    this.loadRates();
  }

  convert(save = true): void {
    if (!this.amount || this.amount <= 0) {
      this.result = null;
      this.errorMessage = 'Digite um valor maior que zero.';
      return;
    }

    const rate = this.rates[this.toCurrency];
    if (!rate) {
      this.result = null;
      this.errorMessage = 'Moeda de destino indisponível no momento.';
      return;
    }

    this.currentRate = rate;
    this.result = this.amount * rate;
    this.errorMessage = this.offlineMode ? this.errorMessage : '';

    if (save) {
      const item: ConversionHistory = {
        amount: this.amount,
        from: this.fromCurrency,
        to: this.toCurrency,
        result: this.result,
        rate,
        date: new Date().toLocaleString('pt-BR')
      };
      this.history = [item, ...this.history].slice(0, 10);
      localStorage.setItem(this.historyKey, JSON.stringify(this.history));
    }
  }

  invertCurrencies(): void {
    const oldFrom = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = oldFrom;
    this.loadRates();
  }

  clearHistory(): void {
    this.history = [];
    localStorage.removeItem(this.historyKey);
  }

  private loadHistory(): void {
    const saved = localStorage.getItem(this.historyKey);
    this.history = saved ? JSON.parse(saved) as ConversionHistory[] : [];
  }
}
