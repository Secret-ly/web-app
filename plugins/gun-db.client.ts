import GUN from 'gun/gun';
import 'gun/sea';
import 'gun/lib/then';

const db = GUN(['https://safe-thicket-53202.herokuapp.com/gun']);

const user = db.user();

user.recall({ sessionStorage: true });

export default defineNuxtPlugin(() => {
  return {
    provide: {
      db,
      user,
      GUN
    }
  };
});
