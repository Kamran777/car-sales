import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

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
    },
    {
      id: 6,
      mark: 'Lamborghini',
      model: 'Huracan',
      price: '678 537',
      salon: false,
      year: 2020,
      motor: 6.2,
      city: 'Warsaw',
      km: 2277,
      img: '../../../assets/images/cards/lamborghini-huracan.jpeg',
    },
    {
      id: 7,
      mark: 'Chevrolet',
      model: 'Corvette',
      price: '137 777',
      salon: false,
      year: 2017,
      motor: 6.2,
      city: 'Katowice',
      km: 25699,
      img: '../../../assets/images/cards/corvette.jpeg',
    },
    {
      id: 8,
      mark: 'Mercedes',
      model: 'G-Class',
      price: '457 421',
      salon: false,
      year: 2019,
      motor: 6.3,
      city: 'Gdansk',
      km: 54899,
      img: '../../../assets/images/cards/g-class.jpeg',
    },
    {
      id: 9,
      mark: 'Jaguar',
      model: 'F-Type',
      price: '53 532',
      salon: true,
      year: 2017,
      motor: 5.5,
      city: 'Katowice',
      km: 55699,
      img: '../../../assets/images/cards/jaguar.jpeg',
    },
    {
      id: 7,
      mark: 'BMW',
      model: '7-series',
      price: '34 500',
      salon: false,
      year: 2013,
      motor: 6.1,
      city: 'Warsaw',
      km: 68000,
      img: '../../../assets/images/cards/bmw-7.jpeg',
    },
    {
      id: 7,
      mark: 'Infiniti',
      model: 'Q50',
      price: '44 211',
      salon: false,
      year: 2019,
      motor: 3.3,
      city: 'Krakow',
      km: 53789,
      img: '../../../assets/images/cards/infiniti-q50.jpeg',
    },
    {
      id: 7,
      mark: 'Mercedes',
      model: 'AMG GT',
      price: '99 543',
      salon: true,
      year: 2020,
      motor: 6.3,
      city: 'Warsaw',
      km: 5326,
      img: '../../../assets/images/cards/amg-gt.jpeg',
    }
  ];

  public title: string = "Latest Posts";

  constructor() { }

  ngOnInit() {
  }

}
