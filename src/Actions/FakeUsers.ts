import { FAKE_USERS_ADDED } from "./type";
import faker from "faker/locale/de";
import _ from "lodash";

export const AddFakeUsers = (numberUsers: number) => {
  const users = _.times(numberUsers, () => {
    const n = _.random(0, 2);
    const obj = {
      _id: faker.random.number(),
      name: faker.name.firstName(),
      gender: n === 0 ? "male" : n === 1 ? "female" : "other",
      birthDay: new Date(faker.date.past()),
      image: faker.image.avatar()
    };
    return obj;
  });
  return {
    type: FAKE_USERS_ADDED,
    payload: users
  };
};
