import { CharactersResult } from '../types/characters';
import { API_URL } from '../constants';

export async function getCharacters(): Promise<CharactersResult> {
  const res = await fetch(`${API_URL}/character`)

  return await res.json()
}