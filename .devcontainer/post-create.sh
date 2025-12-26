#!/bin/bash

echo "🚀 Starting post-create setup..."

# Get the workspace root directory dynamically
WORKSPACE_ROOT=$(pwd)
echo "📂 Workspace root: $WORKSPACE_ROOT"

echo "⚙️ Installing dependencies..."
pnpm install

echo "✅ Post-create setup complete!"
