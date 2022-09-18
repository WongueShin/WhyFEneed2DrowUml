import { Store } from "core/store/store";
import { faker } from "@faker-js/faker";

export abstract class StoreRepository {
  abstract fetchStoreList(storeLength?: number | null): Promise<Array<Store>>;

  static newInstance(): StoreRepository {
    return new StoreRepositoryImpl();
  }
}

class StoreRepositoryImpl {
  async fetchStoreList(storeLength?: number | null): Promise<Array<Store>> {
    const storeListLenght: number =
      storeLength ?? parseInt(faker.random.numeric(1) + 1);

    // random delay 를 기다립니다.
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 2))
    );

    const storeList: Array<Store> = [];
    // faker 를 사용해 임의의 Store 를 생성합니다.
    for (var i = 0; i < storeListLenght; i++) {
      storeList.push(
        ((): Store => {
          var store: Store = {
            indentifitionInfo: faker.random.alphaNumeric(9),
            thumbnailUrl: faker.image.imageUrl(),
            storeName: faker.lorem.word(),
          };
          return store;
        })()
      );
    }
    return storeList;
  }
}
