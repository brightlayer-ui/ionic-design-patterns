import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataListComponent } from './data-list.component';
import { DataListModule } from './data-list.module';

describe('DataListComponent', () => {
    let component: DataListComponent;
    let fixture: ComponentFixture<DataListComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [DataListModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
