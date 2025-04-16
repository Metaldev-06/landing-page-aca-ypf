import { inject, Injectable } from '@angular/core';

import { SupabaseService } from './supabase.service';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private readonly _supabaseClient = inject(SupabaseService).supabaseClient;

  async getAllServices(): Promise<any[]> {
    try {
      const response = await this._supabaseClient.from('services').select('*');

      if (response.error)
        throw new Error(`Error fetching services: ${response.error.message}`);

      const services = response.data;

      console.log(services);

      return services;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  }

  public servicesQuery = injectQuery(() => ({
    queryKey: ['services'],
    queryFn: () => this.getAllServices(),
  }));
}
