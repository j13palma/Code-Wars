//  Simple, remove the spaces from the string, then return the resultant string.
//  input '8 j 8   mBliB8g  imjB8B8  jl  B'
//  expect '8j8mBliB8gimjB8B8jlB'

function noSpace(x) {
  const regex = / /g;
  return x.replace(regex, '');
}
