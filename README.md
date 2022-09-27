# Storybook

## Storybook 개요

### Storybook 이란?

- 개발모드에서 앱과 같이 실행되며, 비즈니스 로직과 맥락(Context)으로부터 분리된 UI 컴포넌트를 만들 수 있도록 도와주는 앱
- 컴포넌트 단위의 개발을 도와주는 툴로서 하나의 컴포넌트가 어떻게 보여지고 작동하는지 알 수 있게 해주는 툴

### Storybook을 사용하는 이유

- 자신에게는 UI 컴포넌트를 위한 연습장의 역할
- 개발자들끼리는 컴포넌트의 메뉴얼의 역할
- 디자이너와는 커뮤니케이션 도구의 역할

### Storybook을 사용하면서 생기는 장점
- 컴포넌트 문서화를 통해 다른 직군과의 커뮤니케이션이 용이해짐
- 컴포넌트 자체로 테스트가 가능해짐 (SDD)
- 컴포넌트 테스트를 위한 컴포넌트 작성이 가능해짐 (*)

## Storybook 초기 설정 방법

### 설치

```bash
npx storybook init
```

### 실행

```bash
npm run storybook
```

## Storybook의 기능/특징
- Args
- Parameter
- Decorator
- Play Function
- Nameing components and hierachy
- MDX
- Addon