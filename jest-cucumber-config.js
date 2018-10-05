import setJestCucumberConfiguration from 'jest-cucumber';

setJestCucumberConfiguration({
  tagFilter: ['@ui'],
  scenarioNameTemplate: vars => ` ${vars.featureTitle} - ${vars.scenarioTitle}}`,
});
