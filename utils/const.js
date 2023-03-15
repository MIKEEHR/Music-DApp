import { PublicKey } from "@solana/web3.js";
import music from "./music.json";

export const SOLANA_HOST =
  "https://muddy-shy-dawn.solana-devnet.quiknode.pro/5b638e723dd3df716748cb5432458a2e21e53e05/";

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  "4suGMQtsEYn5MasvD3FmuDTqmSKuxQKCP8Z1QHDQnZzC"
);

export const STABLE_POOL_IDL = music;
