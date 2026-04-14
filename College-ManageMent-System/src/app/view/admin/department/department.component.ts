import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { DepartmentRESPONSE } from '../../models/response_dto/department';

@Component({
  selector: 'app-department',
  standalone: false,
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  departmentForm: FormGroup;
  department: DepartmentRESPONSE[];
  editingId: any = null;

  constructor(private fb: FormBuilder, private dp: DepartmentService) {
    this.departmentForm = this.fb.group({
      name: ["", [Validators.required]],
      code: ['', [Validators.required, Validators.minLength(3)]],
      hodName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      extensionNo: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.department = [];
  }

  ngOnInit(): void {
    this.loadAll();
  }
  loadAll(): void {
    this.dp.getDepts().subscribe({
      next: (res) => {
        this.department = res;
        console.log('departments loaded', this.department);
      },
      error: (res) => { console.log("error" + JSON.stringify(res)) }
    });
  }

  addDepartment() {
    if (this.departmentForm.valid) {
      if (this.editingId) {
        this.dp.updateDept(this.editingId, this.departmentForm.value).subscribe({
          next: (res) => {
            console.log("Success: " + JSON.stringify(res));
            this.editingId = null;
            this.departmentForm.reset();
            this.loadAll();
          },
          error: (res) => { console.log("Error: " + JSON.stringify(res)) }
        });
      } else {
        this.dp.addDept(this.departmentForm.value).subscribe({
          next: (res) => {
            console.log("Success: " + JSON.stringify(res));
            this.departmentForm.reset();
            this.loadAll();
          },
          error: (res) => { console.log("Error: " + JSON.stringify(res)) }
        });
      }
    }
    else {
      console.log("error");
    }
  }

  editDepartment(dept: any) {
    this.editingId = dept.id;
    this.departmentForm.patchValue({
      name: dept.name,
      code: dept.code,
      hodName: dept.hodName,
      email: dept.email,
      extensionNo: dept.extensionNo || ''
    });
  }

  deleteDepartment(id: any) {
    if (confirm("Are you sure you want to delete this department?")) {
      this.dp.deleteDept(id).subscribe({
        next: (res) => {
          console.log("Deleted: " + JSON.stringify(res));
          this.loadAll();
        },
        error: (res) => { console.log("Error: " + JSON.stringify(res)) }
      });
    }
  }
}

// interface
// formbuilder

// service
// httpd client
