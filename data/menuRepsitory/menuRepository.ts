import { Menu } from "core/menu/menu";
import { faker } from "@faker-js/faker";

export abstract class MenuRepository {
    abstract fetchMenuList(menuLength: number | null): Promise<Array<Menu>>;

    static newInstance():MenuRepository {
        return new MenuRepositoryImlp();
    }
}

class MenuRepositoryImlp {
  async fetchMenuList(menuLength: number | null): Promise<Array<Menu>> {
    const menuListLength: number =
      menuLength ?? parseInt(faker.random.numeric(1) + 1);

    // random delay 를 기다립니다.
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 2))
    );

    const menuList: Array<Menu> = [];
    // faker 를 사용해 임의의 매뉴를 생성해 반환합니다.
    for (var i = 0; i < menuListLength; i++) {
      var menu: Menu = {
        indentifitionInfo: faker.random.alphaNumeric(9),
        thumbnailUrl: faker.image.imageUrl(),
        menuName: faker.lorem.words(),
        price: parseInt(faker.random.numeric(5)),
      };

      menuList.push(menu);
    }

    return menuList;
  }
}
