import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ProductsModel } from '../../../model/products.model';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Price ordered'];
  productsArrayData = new MatTableDataSource<ProductsModel>();
  productsArray: Array<ProductsModel> = [];

  constructor(private dataService: DataServiceService,
    private loadingService:LoadingService) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  /**
   * @description get method to get products list
   */
  getProductsList() {
    this.loadingService.show();
    this.dataService.getJsonData().subscribe((data: any) => {
      if (data) {
        for (let product in data?.products) {
          this.productsArray.push(data?.products[product]);
        }
        this.productsArray.sort((a:any,b:any)=>{
          return b.popularity - a.popularity;
        });
        this.productsArrayData.data = this.productsArray;
      }
    });
    this.loadingService.hide();
  }

}
