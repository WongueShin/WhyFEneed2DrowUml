import { MenuOption } from "core/memuOption/menuOption";
import { MenuOptionRepository } from "data/optionReposritory/optionReposritory";
import { expect, test } from "@jest/globals";

test("MenuOption Repo 는, 지정한 개수의 옵션 목록을 가져 올 수 있다.", async () => {
  // given: MenuOption Repository 와, 가져올 메뉴의 개수를 설정한다.
  const menuOptionRepo: MenuOptionRepository =
    MenuOptionRepository.newInstance();
  let listLen: number = Math.floor(Math.random() * 10);

  // when: MenuOptionReposiroy 에서 데이터를 가져오려 시도한다.
  let data: Array<MenuOption> = await menuOptionRepo.fetchMenuOptionList(
    listLen
  );

  // expect: MenuOption의 배열을 가져 올 수 있다.
  expect(data instanceof Array<MenuOption>);

  // expect:  배열의 길이는 지정한 값과 동일하다.
  expect(data.length).toBe(listLen);
});
