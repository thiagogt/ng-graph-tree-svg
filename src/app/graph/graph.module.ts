import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GraphComponent } from "./graph.component";
import { NodeComponent } from "./node/node.component";
import { LinkComponent } from "./link/link.component";

@NgModule({
  imports: [CommonModule],
  declarations: [GraphComponent, NodeComponent, LinkComponent],
  exports: [GraphComponent]
})
export class GraphModule {}
