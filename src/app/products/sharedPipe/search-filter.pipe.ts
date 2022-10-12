import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

transform(value: any[],filterString:string,propName:string):any[] {
  const result:any=[]
 if(!value || filterString=="" || propName==""){
  return value
 } 
 value.forEach((item:any)=>{
 if( item[propName].trim().toLowerCase().includes(filterString)){
  result.push(item)
}
 })
 return result
}

}
