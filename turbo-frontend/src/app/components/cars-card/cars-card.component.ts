import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-card',
  templateUrl: './cars-card.component.html',
  styleUrls: ['./cars-card.component.scss'],
})
export class CarsCardComponent implements OnInit {
  public cars = [
    {
      id: 1,
      mark: 'Audi',
      model: 'A6',
      price: '156 000',
      salon: true,
      year: 2015,
      motor: 2.4,
      city: 'Warsaw',
      km: 50000,
      img: '../../../assets/images/cards/audi-a6.jpeg',
    },
    {
      id: 2,
      mark: 'Ferrari',
      model: '456',
      price: '277 000',
      salon: false,
      year: 2019,
      motor: 6.2,
      city: 'Gdansk',
      km: 30000,
      img: '../../../assets/images/cards/ferrari.jpeg',
    },
    {
      id: 3,
      mark: 'Nissan',
      model: 'GTR',
      price: '99 867',
      salon: false,
      year: 2009,
      motor: 3.6,
      city: 'Krakow',
      km: 77284,
      img: '../../../assets/images/cards/nissan-gtr.jpeg',
    },
    {
      id: 4,
      mark: 'BMW',
      model: '3 Series',
      price: '188 999',
      salon: true,
      year: 2018,
      motor: 1.8,
      city: 'Warsaw',
      km: 6500,
      img: '../../../assets/images/cards/bmw-m3.jpeg',
    },
    {
      id: 5,
      mark: 'Lamborghini',
      model: 'Aventador',
      price: '599 867',
      salon: false,
      year: 2018,
      motor: 6.2,
      city: 'Wroclaw',
      km: 5577,
      img: '../../../assets/images/cards/lamborghini.jpeg',
    }
  ];

  public ngOnInit(): void {}
}
