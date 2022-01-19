import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-sandbox2',
  templateUrl: './sandbox2.component.html',
  styleUrls: ['./sandbox2.component.css']
})
export class Sandbox2Component implements OnInit {
  isActive = true
  items = [
    { name: 'Bob' },
    { name: 'Bob2' },
    { name: 'Bob3' },
  ]
  switchItems = { name: 'Bob' }
  constructor(private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef
  ) { }

  ngOnInit(): void {
    this.logService.logMessage('Hello')
    this.renderer.setStyle(this.host.nativeElement,'color','red')
  }

}
