
// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 중복된 속성은 병합된다.
type AliasUser = {
  name: string;
  level: number;
}
type Skill = {
  name: string;
  level: number;
}

type UserAndSkill = User & Skill;
const jenny: UserAndSkill = {
  name: 'jenny',
  level: 100
}

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
type ColorAndSize = {
  color?: string;
  size: number;
  position: number[]
}

const blueCircle :ColorAndSize = {
  color: 'blue',
  size: 10,
  position: [0, 0]
}


//(숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
type UserProfile = {
  name: string;
  phone: number;
  email?: string;
}

const jayProfile :UserProfile = {
  name: 'jay',
  phone: 123123123,
  email: 'jay@user.com'
}

// (숙제4) 다음을 만족하는 type alias를 만들어보십시오.
type MinorProfile = {
  minor: boolean;
}
type MinorUserProfile = UserProfile & MinorProfile;

const paulProfile: MinorUserProfile = {
  name: 'paul',
  phone: 123123123,
  email: 'paul@user.com',
  minor: true
}
