import {Store} from 'core/store/store';
import { StoreRepository } from '../storeRepository/storeReposritory';
import {expect, test} from '@jest/globals';

test("Storeage Repo 는, 지정한 개수의 상점 목록들을 가져 올 수 있다.",  async ()=>{
    const storeRepo: StoreRepository = new StoreRepository();
    let listLen = Math.floor(Math.random() * 10);
    let data: Array<Store> = await storeRepo.fetchStoreList(listLen);
    // Store의 배열을 가져올 수 있다.
    console.log(`${listLen}, ${data}`);
    expect(data instanceof Array<Store>).toBe(true);
    // 배열의 길이는 지정한 값과 동일하다.
    expect(data.length).toBe(listLen);
});