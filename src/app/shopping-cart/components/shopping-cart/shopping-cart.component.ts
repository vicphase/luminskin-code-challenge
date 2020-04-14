import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() currencies: string[] = [];
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      currency: null,
      products: this.fb.array([])
    });
  }

  ngOnInit(): void {}
}
