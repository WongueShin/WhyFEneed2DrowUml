import { MenuOption } from "core/memuOption/menuOption";
import { faker } from "@faker-js/faker";

export abstract class MenuOptionRepository {
    abstract fetchMenuOptionList(optionLength: number | null): Promise<Array<MenuOption>>;

    static newInstance(): MenuOptionRepository{
        return new MenuOptionRepositoryImlp();
    }
}

class MenuOptionRepositoryImlp implements MenuOptionRepository {
  async fetchMenuOptionList(
    optionLength: number | null
  ): Promise<Array<MenuOption>> {
    const menuOptionLength: number =
      optionLength ?? parseInt(faker.random.numeric(1));

    // random delay 를 기다립니다.
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 2))
    );

    const optionList: Array<MenuOption> = [];

    //faker 를 사용해 임의의 옵션 목록을 반환합니다.
    for (var i = 0; i < menuOptionLength; i++) {
      var option: MenuOption = {
        indentifitionInfo: faker.random.alphaNumeric(9),
        additionalPrice: parseInt(faker.random.numeric(4)),
      };

      optionList.push(option);
    }
    return optionList;
  }
}
