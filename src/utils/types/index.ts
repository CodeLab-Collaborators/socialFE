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
  onclick: React.MouseEventHandler<HTMLButtonElement>;
  width: string;
};
