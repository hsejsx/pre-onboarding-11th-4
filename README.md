# 한국임상정보 검색 영역 클론 - (원티드 프리온보딩 인턴십 11기 4주차)

- 이 프로젝트는 [assignment-api](https://github.com/walking-sunset/assignment-api)에 의존합니다. 해당 API를 설치하시고 서버를 `npm start`로 실행시켜야 제대로 동작합니다.

## 기능 시연

<table>
    <tbody>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://github.com/hsejsx/pre-onboarding-11th-4/assets/108166730/03224580-f0d7-4017-b92c-fc3f91cd5ac1"
                    alt="" /></td>
            <td>이슈 리스트<ul>
                    <li>검색창에 검색어를 입력하면 추천 검색어가 나옵니다</li>
                    <li>Tab을 누르면 다음 추천 검색어, Shift + Tab을 누르면 이전 추천 검색어를 focus 합니다</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## 기능 설명

### API 호출별로 로컬 캐싱 구현

- localStorage에 `검색어: 추천 검색어 배열`로 저장하여 검색 전 해당 `localStorage` item이 있는지 확인하여, 있으면 저장된 데이터를, 없으면 API 호출하여 추천 검색어를 보이게 설정했습니다.

```js
// LocalSearchRepository.js
export class LocalSearchRepository {
  save(name, keywords) {
    localStorage.setItem(name, JSON.stringify([...keywords]));
  }

  get(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}
```

### 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- 입력마다 API를 호출하지 않도록 입력시 `setTimeout`을 이용하여 1초 뒤에 검색 되도록 했습니다. 물론 호출 전에 또 다른 입력이 있을 시 기존 `setTimeout`을 지우고 다시 1초 뒤에 검색 되도록 설정했습니다.

```js
// SearchContext.js 코드 일부
const delaySearch = (name) => {
  if (timerId) {
    clearTimeout(timerId);
  }

  if (!name) {
    setKeywords([]);
    return;
  }

  const newTimerId = setTimeout(() => {
    if (localSearchRepository.get(name)) {
      return setKeywords(localSearchRepository.get(name));
    }
    search(name)
      .then((result) => {
        setKeywords(result);
        localSearchRepository.save(name, result);
      })
      .catch((error) => {
        console.error('API 요청 에러:', error);
      });
  }, 1000);

  setTimerId(newTimerId);
};
```

### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- `Tab`키를 누르면 다음 추천 검색어로, `Shift + Tab`을 누르면 이전 추천 검색어로 이동합니다. 추천 검색어에 `focus`된 상태로 `enter`를 누르면 해당 검색어로 입력값이 바뀝니다.
