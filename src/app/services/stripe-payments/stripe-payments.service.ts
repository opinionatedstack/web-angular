import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripePaymentsService {
  stripe = new Stripe(environment.stripe.publishable_key); // use your test publishable key

  constructor(private http: HttpClient) { }

  createSession(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/createSession/', params);
  }

  getSession(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getSession/', params);
  }

  getStripeSubscriptions(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getStripeSubscriptions/', params);
  }

  getSubcriptionPaymentHistory(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getSubcriptionPaymentHistory/', params);
  }

  getPayments(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getPayments/', params);
  }

  getCompletedSessionsByAuth0UserId(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getCompletedSessionsByAuth0UserId/', params);
  }

  sessionCancelled(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/sessionCancelled/', params);
  }

  getPaymentsBySubscriptionId(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getPaymentsBySubscriptionId/', params);
  }

  getSubscriptionById(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getSubscriptionById/', params);
  }

  getPlanById(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getPlanById/', params);
  }

  getProductById(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getProductById/', params);
  }

  getCustomerById(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getCustomerById/', params);
  }

  getSubscriptionsByCustomerId(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getSubscriptionsByCustomerId/', params);
  }

  getInvoiceList(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getInvoiceList/', params);
  }

  cancelSubscription(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/cancelSubscription/', params);
  }

  getBillingProductsPlans(params: any): Observable < any > {
    return this.http.post(environment.stripe.stripeRestServiceUrl + '/getBillingProductsPlans/', params);
  }
}
