import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.biznet{
   export class Transfer extends Asset {
      id: string;
      description: string;
      amount: number;
      to: User;
   }
   export class User extends Participant {
      id: string;
      name: string;
   }
   export class Trade extends Transaction {
      money: Transfer;
      from: User;
   }
// }
