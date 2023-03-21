import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-interactive-viewer',
  templateUrl: './interactive-viewer.component.html',
  styleUrls: ['./interactive-viewer.component.css']
})
export class InteractiveViewerComponent implements OnInit{
  public readonly servicesCode = 100;
  public readonly ecoAdviceCode = 101;
  public readonly manualCode = 102;
  public readonly deviceStateCode = 103;

  public readonly troubleShootingPageNumber = 39;

  public selectedInfo = 0;
  public showPdf = false;
  public selectedPdfPage = 1;

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.interactionService.selectedInfo$.subscribe(value => {
      this.selectedInfo = value;
      this.showPdf = false;
    })
  }

  showServices() {
    this.interactionService.setInfo(this.servicesCode);
  }

  showEcoAdvice() {
    this.interactionService.setInfo(this.ecoAdviceCode);
  }

  showDeviceState() {
    this.interactionService.setInfo(this.deviceStateCode);
  }

  showManual() {
    this.interactionService.setInfo(this.manualCode);
    this.selectedPdfPage = 1;
  }

  showTroubleShooting() {
    this.interactionService.setInfo(this.manualCode);
    this.selectedPdfPage = this.troubleShootingPageNumber;
  }
}
