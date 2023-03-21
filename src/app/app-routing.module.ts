import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveViewerComponent } from './pages/interactive-viewer/interactive-viewer.component';

const routes: Routes = [
  { path: '**', component: InteractiveViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
