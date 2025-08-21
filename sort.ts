const CONSTANTS = Object.freeze({
  VOLUME_LIMIT: 1_000_000, // Use of numeric separator to easy readability
  DIMENSION_LIMIT: 150,
  MASS_LIMIT: 20,
});

/**
 * Sorts a package into the correct stack based on its dimensions and mass.
 * @param width Width in centimeters
 * @param height Height in centimeters
 * @param length Length in centimeters
 * @param mass Mass in kilograms
 * @returns Stack name: 'STANDARD', 'SPECIAL', or 'REJECTED'
 */
export function sort(
  width: number,
  height: number,
  length: number,
  mass: number
): string {
  const volume = width * height * length;
  // verify if volume is higher than 1000000
  const isBulky =
    volume >= CONSTANTS.VOLUME_LIMIT ||
    width >= CONSTANTS.DIMENSION_LIMIT ||
    height >= CONSTANTS.DIMENSION_LIMIT ||
    length >= CONSTANTS.DIMENSION_LIMIT;

  const isHeavy = mass >= CONSTANTS.MASS_LIMIT;

  if (isBulky && isHeavy) return "REJECTED";
  if (isBulky || isHeavy) return "SPECIAL";
  return "STANDARD";
}
