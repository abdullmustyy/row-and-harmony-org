import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Admin Panel | Row and Harmony',

  projectId: 'd0j9e2sb',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
