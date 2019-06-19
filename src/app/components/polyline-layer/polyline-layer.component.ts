import { from as observableFrom, Observable, Subject } from 'rxjs';

import { merge } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AcEntity, AcLayerComponent, AcNotification, ActionType } from 'angular-cesium';

@Component({
  selector: 'polyline-layer',
  templateUrl: 'polyline-layer.component.html',
})
export class PolylineLayerComponent implements OnInit {
  @ViewChild(AcLayerComponent, { static: false }) layer: AcLayerComponent;

  polylines$: Observable<AcNotification>;
  show = true;
  updater = new Subject<AcNotification>();

  constructor() {
  }

  ngOnInit() {



    this.polylines$ = observableFrom([
      {
        id: '1',
        entity: new AcEntity({
          material: Cesium.Color.GREEN,
          outline: true,
          width: 1,
          zIndex: new Cesium.Cartesian3(0, 0, -20),
          labelText: "idosdfnhosdfnsdofn",
          font : '16px Open Sans',
          labelPostion: new Cesium.Cartesian3.fromDegrees( -120.0, 37.0),
          positions: Cesium.Cartesian3.fromDegreesArray([
              -120.0, 37.0,
              -120.0, 32.0
            ]),
        }
        ),
        actionType: ActionType.ADD_UPDATE
      }
    ]).pipe(merge(this.updater));





  }
}
