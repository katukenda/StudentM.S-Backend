export interface IPayment {
    advertistmentId?: string
    amount?: number


  
}

export class Payment implements IPayment{
   constructor(
       public advertistmentId?: string,
       public amount?: number,

   ){

   }
}

