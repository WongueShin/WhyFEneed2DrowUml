import { Store } from "core/store/store";
import { StoreRepository } from "data/storeRepository/storeReposritory";
import { expect, test } from "@jest/globals";

test("Storeage Repo 는, 지정한 개수의 상점 목록들을 가져 올 수 있다.", async () => {
  // given: Store Repository 와, 가져올 매장의 개수를 설정한다.
  const storeRepo: StoreRepository =  StoreRepository.newInstance();
  let listLen = Math.floor(Math.random() * 10);

  // when: Store Repository 에서 데이터를 가져오려 시도한다.
  let data: Array<Store> = await storeRepo.fetchStoreList(listLen);

  // expect:  Store의 배열을 가져올 수 있다.
  expect(data instanceof Array<Store>).toBe(true);

  // expect: 배열의 길이는 지정한 값과 동일하다.
  expect(data.length).toBe(listLen);
});
