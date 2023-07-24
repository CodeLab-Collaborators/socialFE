export type inputData = {
  placeholder: string;
  labelName: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  inputType: string;
  characterLength: number;
};

export type buttonData = {
  title: string;
  buttonType: "button" | "submit" | "reset";
  onclick?: () => void;
  width: string;
};

export type CreateUserParams = {
  fullName: string;
  email: string;
  userName: string;
  password: string;
};
