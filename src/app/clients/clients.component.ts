import { Component, signal, Signal, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: false,
  
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  editMode = false;

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]], // Name field
      PIB: ['', [Validators.required]], // PIB field with 9 digits validation
      ID: ['', [Validators.required]], // ID of 8 characters
      address: ['', Validators.required] // Address is required
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  cancel() {
    this.editMode = !this.editMode;
  }

  addNewClient(){
    this.editMode = !this.editMode;
  }

  onActionClick(element: any) {

  }
  
  displayedColumns: string[] = ['name', 'pib', 'identifier', 'type', 'actions'];
  dataSource = new MatTableDataSource([
    { name: 'Company A', pib: '123456789', identifier: 'ID1', type: 'Type 1' },
    { name: 'Company B', pib: '987654321', identifier: 'ID2', type: 'Type 2' },
    { name: 'Company C', pib: '456789123', identifier: 'ID3', type: 'Type 3' },
    { name: 'Company D', pib: '654321987', identifier: 'ID4', type: 'Type 4' },
    { name: 'Company A', pib: '123456789', identifier: 'ID1', type: 'Type 1' },
    { name: 'Company B', pib: '987654321', identifier: 'ID2', type: 'Type 2' },
    { name: 'Company C', pib: '456789123', identifier: 'ID3', type: 'Type 3' },
    { name: 'Company D', pib: '654321987', identifier: 'ID4', type: 'Type 4' },
    { name: 'Company A', pib: '123456789', identifier: 'ID1', type: 'Type 1' },
    { name: 'Company B', pib: '987654321', identifier: 'ID2', type: 'Type 2' },
    { name: 'Company C', pib: '456789123', identifier: 'ID3', type: 'Type 3' },
    { name: 'Company D', pib: '654321987', identifier: 'ID4', type: 'Type 4' },
    { name: 'Company A', pib: '123456789', identifier: 'ID1', type: 'Type 1' },
    { name: 'Company B', pib: '987654321', identifier: 'ID2', type: 'Type 2' },
    { name: 'Company C', pib: '456789123', identifier: 'ID3', type: 'Type 3' },
    { name: 'Company D', pib: '654321987', identifier: 'ID4', type: 'Type 4' },
    { name: 'Company A', pib: '123456789', identifier: 'ID1', type: 'Type 1' },
    { name: 'Company B', pib: '987654321', identifier: 'ID2', type: 'Type 2' },
    { name: 'Company C', pib: '456789123', identifier: 'ID3', type: 'Type 3' },
    { name: 'Company D', pib: '654321987', identifier: 'ID4', type: 'Type 4' },
    { name: 'Company A', pib: '123456789', identifier: 'ID1', type: 'Type 1' },
    { name: 'Company B', pib: '987654321', identifier: 'ID2', type: 'Type 2' },
    { name: 'Company C', pib: '456789123', identifier: 'ID3', type: 'Type 3' },
    { name: 'Company D', pib: '654321987', identifier: 'ID4', type: 'Type 4' },
    { name: 'Company A', pib: '123456789', identifier: 'ID1', type: 'Type 1' },
    { name: 'Company B', pib: '987654321', identifier: 'ID2', type: 'Type 2' },
    { name: 'Company C', pib: '456789123', identifier: 'ID3', type: 'Type 3' },
    { name: 'Company D', pib: '654321987', identifier: 'ID4', type: 'Type 4' },
    // Add more data as needed
  ]);

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
}