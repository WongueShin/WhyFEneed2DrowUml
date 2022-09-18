import { Menu } from "core/menu/menu";
import { MenuRepository } from "data/menuRepsitory/menuRepository";
import { expect, test } from "@jest/globals";

test("Menu Repo 는, 지정한 개수의 상점 목록들을 가져 올 수 있다.", async () => {
  // given: Menu Repository 와, 가져올 메뉴의 개수를 설정한다.
  const menuRepo: MenuRepository = MenuRepository.newInstance();
  let listLen: number = Math.floor(Math.random() * 10);

  // when: MenuReposiroy 에서 데이터를 가져오려 시도한다.
  let data: Array<Menu> = await menuRepo.fetchMenuList(listLen);

  // expect:  Menu의 배열을 가져 올 수 있다.
  expect(data instanceof Array<Menu>);

  // expect:  배열의 길이는 지정한 값과 동일하다.
  expect(data.length).toBe(listLen);
});
