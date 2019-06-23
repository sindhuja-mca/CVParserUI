import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filterName' })
export class CandidateNamePipe implements PipeTransform {
    transform(candidateDetails: any, searchName: any): any {
        if (searchName == null)
            return candidateDetails;
        return candidateDetails.filterName(function (candidateDetail) {
            return candidateDetail.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1;
        });
    }
}
