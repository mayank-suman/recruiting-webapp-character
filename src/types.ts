export type Attributes = {
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export interface DerivedAttributes {
  id: number;
  label: string;
  value: number;
}

export interface AttributesContextType {
  attributes: DerivedAttributes[];
  increment: (id: number) => void;
  decrement: (id: number) => void;
}
