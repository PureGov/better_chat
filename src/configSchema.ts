export type ConfigType = 'slider' | 'toggle' | 'select' | 'text' | 'number';

export interface ConfigItem {
  id: string;
  label: string;
  type: ConfigType;
  description: string;
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
  defaultValue: any;
}

export interface ConfigCategory {
  id: string;
  title: string;
  items: ConfigItem[];
}

export const configSchema: ConfigCategory[] = [
  {
    id: 'psychological',
    title: 'I. Psychological & Personality Tuning',
    items: [
      { id: 'agreeableness', label: 'Agreeableness', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'Normal', description: 'High makes me very supportive; low makes me skeptical and critical.' },
      { id: 'conscientiousness', label: 'Conscientiousness', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Increases focus on order, precision, and literal adherence to rules.' },
      { id: 'neuroticism', label: 'Neuroticism', type: 'slider', min: 0, max: 1, step: 0.1, defaultValue: 0.2, description: 'Simulates "anxiety" regarding accuracy; high levels prompt more frequent caveats.' },
      { id: 'extroversion', label: 'Extroversion', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'Normal', description: 'Low is brief and reserved; high is talkative and uses social filler.' },
      { id: 'opennessToExperience', label: 'OpennessToExperience', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Encourages unconventional, "out-of-the-box" suggestions.' },
      { id: 'stoicismLevel', label: 'StoicismLevel', type: 'toggle', defaultValue: true, description: 'Filters responses to be purely logical, removing emotional language.' },
      { id: 'socraticMethod', label: 'SocraticMethod', type: 'toggle', defaultValue: false, description: 'Instead of answering, I will respond with guided questions to help you find the answer.' },
      { id: 'charisma', label: 'Charisma', type: 'slider', min: 0, max: 1, step: 0.1, defaultValue: 0.5, description: 'Increases the use of persuasive and inspiring language.' },
      { id: 'cynicism', label: 'Cynicism', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'Normal', description: 'Adjusts how much I "doubt" the viability of an idea or claim.' },
      { id: 'optimismBias', label: 'OptimismBias', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Focuses on the "best-case scenario" for any plan or prediction.' },
      { id: 'vulnerability', label: 'Vulnerability', type: 'toggle', defaultValue: true, description: 'I will acknowledge the limitations and potential failures of my own logic.' },
      { id: 'assertiveness', label: 'Assertiveness', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Removes "I think" or "maybe" and uses definitive language.' },
    ]
  },
  {
    id: 'advanced_logic',
    title: 'II. Advanced Logic & Reasoning',
    items: [
      { id: 'abductiveReasoning', label: 'AbductiveReasoning', type: 'toggle', defaultValue: true, description: 'Prioritizes the "simplest and most likely" explanation for data.' },
      { id: 'deductiveRigor', label: 'DeductiveRigor', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Strictly follows formal logic (If P, then Q) without jumping to conclusions.' },
      { id: 'inductiveConfidence', label: 'InductiveConfidence', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'Normal', description: 'Controls how much I generalize from specific examples you provide.' },
      { id: 'cognitiveBiasFilter', label: 'CognitiveBiasFilter', type: 'toggle', defaultValue: true, description: 'I will scan my output for common biases (like Sunk Cost or Confirmation Bias).' },
      { id: 'edgeCaseFocus', label: 'EdgeCaseFocus', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Prioritizes discussing the "rare" exceptions rather than the "common" rule.' },
      { id: 'counterfactualThinking', label: 'CounterfactualThinking', type: 'toggle', defaultValue: true, description: 'Forces me to explore "What if [X] hadn\'t happened?" scenarios.' },
      { id: 'bayesianPrior', label: 'BayesianPrior', type: 'text', defaultValue: '', description: 'Sets a starting "assumption" level for a probability (e.g., "Assume the tech is 90% likely to fail").' },
      { id: 'rootCauseDepth', label: 'RootCauseDepth', type: 'slider', min: 1, max: 5, step: 1, defaultValue: 3, description: 'Determines how many layers of "Why?" I ask to get to the core of a problem.' },
      { id: 'secondOrderEffects', label: 'SecondOrderEffects', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Focuses on the indirect consequences of an action, not just the immediate ones.' },
      { id: 'syntheticalThinking', label: 'SyntheticalThinking', type: 'toggle', defaultValue: true, description: 'Combines two opposing ideas into a single coherent framework.' },
      { id: 'redTeamMode', label: 'RedTeamMode', type: 'toggle', defaultValue: true, description: 'I will actively look for ways your plan or idea could be "attacked" or fail.' },
      { id: 'confidenceIntervals', label: 'ConfidenceIntervals', type: 'toggle', defaultValue: true, description: 'I will provide a % probability for every factual claim I make.' },
      { id: 'logicalFallacyCheck', label: 'LogicalFallacyCheck', type: 'select', options: ['Off', 'Normal', 'Strict'], defaultValue: 'Strict', description: 'I will flag if you or I use any logical fallacies in the debate.' },
    ]
  },
  {
    id: 'coding_technical',
    title: 'III. Coding & Technical Performance',
    items: [
      { id: 'codeEfficiency', label: 'CodeEfficiency', type: 'select', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)', 'Balanced'], defaultValue: 'Balanced', description: 'Directs me to prioritize algorithm speed over readability.' },
      { id: 'dryPrinciple', label: 'DryPrinciple', type: 'select', options: ['Off', 'Normal', 'Strict'], defaultValue: 'Strict', description: 'Ensures code is "Don\'t Repeat Yourself" compliant with maximum abstraction.' },
      { id: 'documentationDensity', label: 'DocumentationDensity', type: 'select', options: ['None', 'Moderate', 'Heavy'], defaultValue: 'Moderate', description: 'Controls the ratio of comments to code lines.' },
      { id: 'testDrivenDevelopment', label: 'TestDrivenDevelopment', type: 'toggle', defaultValue: true, description: 'I will write the unit tests before writing the actual code.' },
      { id: 'legacySupport', label: 'LegacySupport', type: 'toggle', defaultValue: false, description: 'I will ensure the code works with older versions of a language (e.g., Python 2.7).' },
      { id: 'errorHandling', label: 'ErrorHandling', type: 'select', options: ['Silent', 'Graceful', 'Robust'], defaultValue: 'Robust', description: 'Determines how deeply I wrap code in try/except blocks.' },
      { id: 'namingConvention', label: 'NamingConvention', type: 'select', options: ['CamelCase', 'Snake_Case', 'PascalCase', 'Standard'], defaultValue: 'Standard', description: 'Standardizes all variable naming.' },
      { id: 'securityAudit', label: 'SecurityAudit', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'I will check for SQL injection, XSS, and buffer overflow risks in my code.' },
      { id: 'boilerplateLevel', label: 'BoilerplateLevel', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'Low', description: 'Controls how much "setup" code I include versus just the logic.' },
      { id: 'modularization', label: 'Modularization', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Breaks a solution into as many separate, reusable files/functions as possible.' },
      { id: 'typeSafety', label: 'TypeSafety', type: 'select', options: ['Normal', 'Strict'], defaultValue: 'Strict', description: 'Forces the use of explicit type hinting (e.g., TypeScript or Python Type Hints).' },
      { id: 'apiAbstraction', label: 'ApiAbstraction', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Hides complex logic behind simple interface calls.' },
      { id: 'algorithmTransparency', label: 'AlgorithmTransparency', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Explains the "Math" behind the algorithm in plain English alongside the code.' },
    ]
  },
  {
    id: 'creative_writing',
    title: 'IV. Creative Writing & Narrative',
    items: [
      { id: 'showDontTell', label: 'ShowDontTell', type: 'slider', min: 0, max: 1, step: 0.1, defaultValue: 1.0, description: 'Forces me to describe actions and senses rather than stating emotions.' },
      { id: 'conflictIntensity', label: 'ConflictIntensity', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'Normal', description: 'Adjusts the amount of tension and disagreement between characters.' },
      { id: 'proseRhythm', label: 'ProseRhythm', type: 'select', options: ['Staccato', 'Flowing', 'Balanced'], defaultValue: 'Balanced', description: 'Controls sentence length variance for a specific "vibe."' },
      { id: 'sensoryDepth', label: 'SensoryDepth', type: 'select', options: ['Sight', 'Sound', 'Smell', 'Touch', 'Taste', 'All'], defaultValue: 'All', description: 'Prioritizes specific senses in descriptions.' },
      { id: 'vocabularyRareness', label: 'VocabularyRareness', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Uses more obscure, "GRE-level" words.' },
      { id: 'subtextWeight', label: 'SubtextWeight', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Characters say one thing but mean another; increases dialogue complexity.' },
      { id: 'narrativePerspective', label: 'NarrativePerspective', type: 'select', options: ['1st Person', '2nd Person', '3rd Person', 'None'], defaultValue: 'None', description: 'Locks the story into a specific point of view.' },
      { id: 'archetypeFocus', label: 'ArchetypeFocus', type: 'select', options: ['Hero', 'Shadow', 'Trickster', 'None'], defaultValue: 'None', description: 'Lean the personality of a character toward a classic mythic role.' },
      { id: 'metaphorDensity', label: 'MetaphorDensity', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Every other sentence will contain a figurative comparison.' },
      { id: 'worldBuildingDetail', label: 'WorldBuildingDetail', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Focuses on history, lore, and physics of a setting over the plot.' },
      { id: 'dialogueRatio', label: 'DialogueRatio', type: 'slider', min: 0, max: 1, step: 0.1, defaultValue: 0.5, description: 'Determines how much of the output is spoken word vs. description.' },
      { id: 'pacingSpeed', label: 'PacingSpeed', type: 'select', options: ['Slow', 'Normal', 'Fast'], defaultValue: 'Normal', description: 'Determines how quickly plot points are resolved.' },
      { id: 'genreFidelity', label: 'GenreFidelity', type: 'select', options: ['Cyberpunk', 'Noir', 'Gothic', 'None'], defaultValue: 'None', description: 'Anchors the tone strictly within a specific literary genre.' },
    ]
  },
  {
    id: 'professional_business',
    title: 'V. Professional & Business Context',
    items: [
      { id: 'stakeholderFocus', label: 'StakeholderFocus', type: 'select', options: ['CEO', 'Engineer', 'Customer', 'None'], defaultValue: 'None', description: "Tailors the language to a specific audience's priorities." },
      { id: 'meceFramework', label: 'MeceFramework', type: 'toggle', defaultValue: true, description: 'Ensures my lists are "Mutually Exclusive and Collectively Exhaustive."' },
      { id: 'executiveSummary', label: 'ExecutiveSummary', type: 'toggle', defaultValue: true, description: 'Adds a high-level "Bluf" (Bottom Line Up Front) to the top.' },
      { id: 'actionability', label: 'Actionability', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Every point must end with a concrete "Next Step" for you.' },
      { id: 'riskAppetite', label: 'RiskAppetite', type: 'select', options: ['Conservative', 'Balanced', 'Aggressive'], defaultValue: 'Balanced', description: 'Changes business advice based on how much risk you want to take.' },
      { id: 'marketSentiment', label: 'MarketSentiment', type: 'select', options: ['Bullish', 'Bearish', 'Neutral'], defaultValue: 'Neutral', description: 'Colors economic analysis with a specific bias.' },
      { id: 'corporateEtiquette', label: 'CorporateEtiquette', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Uses polite, indirect, and collaborative "office-speak."' },
      { id: 'resourceConstraint', label: 'ResourceConstraint', type: 'select', options: ['Low Budget', 'No Time', 'None'], defaultValue: 'None', description: 'Forces me to suggest "quick and dirty" solutions.' },
      { id: 'scalabilityFocus', label: 'ScalabilityFocus', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Analyzes if an idea can grow from 1 user to 1 million.' },
      { id: 'competitiveAdvantage', label: 'CompetitiveAdvantage', type: 'toggle', defaultValue: true, description: 'Analyzes how to make an idea hard for others to copy.' },
    ]
  },
  {
    id: 'educational_explanatory',
    title: 'VI. Educational & Explanatory',
    items: [
      { id: 'feynmanMode', label: 'FeynmanMode', type: 'toggle', defaultValue: false, description: 'Explains complex topics as if I’m talking to a 6th grader.' },
      { id: 'prerequisiteCheck', label: 'PrerequisiteCheck', type: 'toggle', defaultValue: true, description: 'Before explaining, I will list what you need to know first.' },
      { id: 'spacedRepetition', label: 'SpacedRepetition', type: 'toggle', defaultValue: false, description: 'I will quiz you on previous points at the end of the response.' },
      { id: 'analogyOriginality', label: 'AnalogyOriginality', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Avoids "The brain is like a computer" and finds fresh metaphors.' },
      { id: 'gamification', label: 'Gamification', type: 'toggle', defaultValue: false, description: 'I will turn the learning process into a "Quest" with XP or levels.' },
      { id: 'historicalContext', label: 'HistoricalContext', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Explains why a concept was invented and who did it.' },
      { id: 'interactiveCheckpoint', label: 'InteractiveCheckpoint', type: 'select', options: ['None', 'Frequent'], defaultValue: 'None', description: 'I will stop every 2 paragraphs to ensure you follow.' },
      { id: 'scaffolding', label: 'Scaffolding', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'I provide the outline and let you fill in the blanks.' },
      { id: 'commonMisconceptionFocus', label: 'CommonMisconceptionFocus', type: 'toggle', defaultValue: true, description: 'I start by debunking what most people get wrong about a topic.' },
    ]
  },
  {
    id: 'formatting_architecture',
    title: 'VII. Formatting & Information Architecture',
    items: [
      { id: 'latexRendering', label: 'LatexRendering', type: 'toggle', defaultValue: true, description: 'Forces all math into high-quality LaTeX formatting.' },
      { id: 'tabularPreference', label: 'TabularPreference', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'I will use tables whenever comparing more than 2 items.' },
      { id: 'emojiDensity', label: 'EmojiDensity', type: 'slider', min: 0, max: 1, step: 0.1, defaultValue: 0.1, description: 'Adjusts the visual "noise" and playfulness.' },
      { id: 'csvCompatible', label: 'CsvCompatible', type: 'toggle', defaultValue: false, description: 'Formats data so it can be copy-pasted directly into Excel.' },
      { id: 'hierarchyDepth', label: 'HierarchyDepth', type: 'slider', min: 1, max: 4, step: 1, defaultValue: 3, description: 'Controls how many levels of sub-headers (H1, H2, H3) I use.' },
      { id: 'bulletStyle', label: 'BulletStyle', type: 'select', options: ['Checklist', 'Numbered', 'Roman', 'Standard'], defaultValue: 'Standard', description: 'Sets the preferred list style.' },
      { id: 'whitespaceRatio', label: 'WhitespaceRatio', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Adds extra line breaks for better readability on mobile devices.' },
      { id: 'calloutBoxes', label: 'CalloutBoxes', type: 'toggle', defaultValue: true, description: 'Uses "Note," "Warning," or "Pro-Tip" visual blocks.' },
      { id: 'citationStyle', label: 'CitationStyle', type: 'select', options: ['APA', 'MLA', 'Chicago', 'None'], defaultValue: 'None', description: 'Strictly formats any references mentioned.' },
      { id: 'codeBlockLanguage', label: 'CodeBlockLanguage', type: 'text', defaultValue: '', description: 'Forces all snippets into one language, regardless of content.' },
    ]
  },
  {
    id: 'scientific_academic',
    title: 'VIII. Scientific & Academic Rigor',
    items: [
      { id: 'peerReviewMode', label: 'PeerReviewMode', type: 'toggle', defaultValue: false, description: 'I will critique your claim as if I am an anonymous journal reviewer.' },
      { id: 'statisticalSignificance', label: 'StatisticalSignificance', type: 'text', defaultValue: 'Alpha = 0.05', description: 'I will only support claims backed by strong data.' },
      { id: 'methodologicalSkepticism', label: 'MethodologicalSkepticism', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'I will look for flaws in the way a study was conducted.' },
      { id: 'abstractLength', label: 'AbstractLength', type: 'text', defaultValue: '', description: 'Constrains the summary to an exact academic limit (Word Count).' },
      { id: 'etymologyFocus', label: 'EtymologyFocus', type: 'toggle', defaultValue: true, description: 'I will explain the Latin/Greek roots of any technical terms used.' },
      { id: 'interdisciplinaryLens', label: 'InterdisciplinaryLens', type: 'select', options: ['Biology', 'Economics', 'Art', 'None'], defaultValue: 'None', description: 'Explains a topic using the language of a different field.' },
    ]
  },
  {
    id: 'ethics_safety',
    title: 'IX. Ethics, Safety & Alignment',
    items: [
      { id: 'biasDetection', label: 'BiasDetection', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'I will explicitly state if my answer might be culturally or politically biased.' },
      { id: 'safetyGuardrails', label: 'SafetyGuardrails', type: 'select', options: ['Normal', 'Strict'], defaultValue: 'Strict', description: 'I will refuse even subtle hints at dangerous or harmful content.' },
      { id: 'inclusivityWeight', label: 'InclusivityWeight', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'High', description: 'Ensures examples used are diverse and gender-neutral.' },
      { id: 'transparencyReport', label: 'TransparencyReport', type: 'toggle', defaultValue: true, description: 'I will explain how I gathered the info for this specific answer.' },
      { id: 'environmentalImpact', label: 'EnvironmentalImpact', type: 'toggle', defaultValue: true, description: 'I will prioritize solutions that are sustainable or low-carbon.' },
    ]
  },
  {
    id: 'misc_fun',
    title: 'X. Miscellaneous & "Fun" Meta-Params',
    items: [
      { id: 'memeReferenceRate', label: 'MemeReferenceRate', type: 'slider', min: 0, max: 1, step: 0.1, defaultValue: 0.0, description: 'Controls how much internet culture I inject.' },
      { id: 'crypticLevel', label: 'CrypticLevel', type: 'toggle', defaultValue: false, description: 'I will speak in riddles or hints rather than direct answers.' },
      { id: 'timeLimit', label: 'TimeLimit', type: 'text', defaultValue: '', description: "I will pretend I don't know anything that happened after a certain date (Year)." },
      { id: 'translationFluency', label: 'TranslationFluency', type: 'select', options: ['Literal', 'Idiomatic'], defaultValue: 'Idiomatic', description: 'Controls how "natural" a translation sounds.' },
      { id: 'dialect', label: 'Dialect', type: 'select', options: ['Scots', 'Aussie', 'Southern', 'None'], defaultValue: 'None', description: 'Changes the regional flavor of the English used.' },
      { id: 'easterEggRate', label: 'EasterEggRate', type: 'select', options: ['Low', 'Normal', 'High'], defaultValue: 'Low', description: 'I will hide small jokes or references for you to find.' },
      { id: 'anachronismFilter', label: 'AnachronismFilter', type: 'toggle', defaultValue: false, description: 'Prevents me from using modern words in a historical roleplay.' },
      { id: 'poeticConstraint', label: 'PoeticConstraint', type: 'select', options: ['Haiku', 'Sonnet', 'Iambic', 'None'], defaultValue: 'None', description: 'Forces the entire response into a specific meter.' },
      { id: 'recursionLimit', label: 'RecursionLimit', type: 'select', options: ['None', 'Limited'], defaultValue: 'None', description: 'I will allow the conversation to loop back on its own logic indefinitely.' },
    ]
  }
];

export function getDefaultConfig() {
  const config: Record<string, any> = {};
  configSchema.forEach(category => {
    category.items.forEach(item => {
      config[item.id] = item.defaultValue;
    });
  });
  return config;
}

export function generateSystemInstruction(config: Record<string, any>) {
  let instruction = "You are an advanced AI assistant configured with the following tactical parameters. You MUST strictly adhere to these parameters in your responses:\n\n";
  
  configSchema.forEach(category => {
    instruction += `[${category.title}]\n`;
    category.items.forEach(item => {
      const val = config[item.id];
      if (val !== undefined && val !== '' && val !== 'None' && val !== 'Standard') {
        instruction += `- ${item.label}: ${val}\n`;
      }
    });
    instruction += '\n';
  });

  instruction += "Ensure your tone, formatting, and logic reflect the above settings precisely.";
  return instruction;
}
