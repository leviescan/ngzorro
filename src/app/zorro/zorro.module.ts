import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzTableModule,
    NzSelectModule,
    NzInputModule,
    NzRadioModule,
    NzDividerModule,
    NzGridModule,
    NzSpaceModule,
    NzDropDownModule,
    NzBadgeModule,
    NzSwitchModule,
    NzCardModule,
    NzFormModule,
    NzInputNumberModule,
    NzToolTipModule,
    NzPopconfirmModule 
  ]
})
export class ZorroModule { }
