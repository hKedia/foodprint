import { Model } from 'radiks';
import moment from 'moment';

export default class User extends Model {
  static className = 'Item';
  static schema = {
    role: {
      type: String,
      decrypted: true
    },
  }

  ago() {
    return moment(this.attrs.createdAt).fromNow();
  }
}