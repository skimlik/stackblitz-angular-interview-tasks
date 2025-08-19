import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-task1-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'task1.component.html',
    styleUrl: 'task1.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task1Component implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        console.log(`On Changes: ${Object.keys(changes).join(',')}`);
    }

    ngOnInit(): void {
        // Will it be ever triggered? component does not implement OnInit
        console.log('On Init');
    }
}