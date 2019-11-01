import { Component, OnInit, Input } from '@angular/core';
import { StripePaymentsService } from '../../../services/stripe-payments/stripe-payments.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription-detail',
  templateUrl: './subscription-detail.component.html',
  styleUrls: ['./subscription-detail.component.scss']
})
export class SubscriptionDetailComponent implements OnInit {
  @Input() stripeSubscriptionId;
  subscription: any;

  constructor(private stripe: StripePaymentsService,
              private router: Router,
              private snackMessage: MatSnackBar) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.stripe.getSubscriptionById({
      stripeSubscriptionId: this.stripeSubscriptionId
    })
      .subscribe( r => {
        this.subscription = r;
      }, e => {
        this.snackMessage.open('Error getting subscription', 'x',{verticalPosition: 'top'});
      });
  }

  cancelSubscription() {
    this.stripe.cancelSubscription({
      stripeSubscriptionId: this.stripeSubscriptionId
    })
      .subscribe( r => {
        this.snackMessage.open('Subscription cancelled', 'x',{verticalPosition: 'top'});
        this.loadData();
      }, e => {
        this.snackMessage.open('Error getting subscription', 'x',{verticalPosition: 'top'});
      });
  }

  upgradeSubscription() {
    this.router.navigate(['/private/signup', this.stripeSubscriptionId]);
  }

}
