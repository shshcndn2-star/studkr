'use server';

/**
 * @fileOverview Flow to visualize the evolution of engine power in GT3 RS models across generations.
 *
 * - visualizeEngineEvolution - A function that generates a chart visualizing the engine power evolution.
 * - VisualizeEngineEvolutionInput - The input type for the visualizeEngineEvolution function.
 * - VisualizeEngineEvolutionOutput - The return type for the visualizeEngineEvolution function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualizeEngineEvolutionInputSchema = z.object({
  generations: z.array(
    z.object({
      generation: z.string().describe('The GT3 RS generation (e.g., 996, 997, 991, 992).'),
      horsepower: z.number().describe('The engine horsepower for the generation.'),
    })
  ).describe('An array of GT3 RS generations with their corresponding engine horsepower.'),
});
export type VisualizeEngineEvolutionInput = z.infer<typeof VisualizeEngineEvolutionInputSchema>;

const VisualizeEngineEvolutionOutputSchema = z.object({
  chartDataUri: z.string().describe('A data URI containing the chart as an image.'),
});
export type VisualizeEngineEvolutionOutput = z.infer<typeof VisualizeEngineEvolutionOutputSchema>;

export async function visualizeEngineEvolution(input: VisualizeEngineEvolutionInput): Promise<VisualizeEngineEvolutionOutput> {
  return visualizeEngineEvolutionFlow(input);
}

const visualizeEngineEvolutionPrompt = ai.definePrompt({
  name: 'visualizeEngineEvolutionPrompt',
  input: {schema: VisualizeEngineEvolutionInputSchema},
  output: {schema: VisualizeEngineEvolutionOutputSchema},
  prompt: `You are an expert data visualizer specializing in creating charts from structured data.

You will receive data about the engine horsepower of different generations of the Porsche 911 GT3 RS.

You will generate a chart visualizing the engine power evolution across these generations. The chart MUST be returned as a data URI of an image (PNG or JPEG format).

Data:
{{#each generations}}
  Generation: {{this.generation}}, Horsepower: {{this.horsepower}}
{{/each}}

Return ONLY the data URI for the chart image. Do not include any other text or explanations.
`,
});

const visualizeEngineEvolutionFlow = ai.defineFlow(
  {
    name: 'visualizeEngineEvolutionFlow',
    inputSchema: VisualizeEngineEvolutionInputSchema,
    outputSchema: VisualizeEngineEvolutionOutputSchema,
  },
  async input => {
    const {output} = await visualizeEngineEvolutionPrompt(input);
    return {chartDataUri: output!.chartDataUri};
  }
);
