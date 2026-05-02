# Create missing components script
$components = @(
    "components\Products\ViewCart.jsx",
    "components\Products\CheckOut.jsx", 
    "components\Account\Billing.jsx",
    "components\Account\OrderHistory.jsx",
    "components\Products\ProductDetails.jsx",
    "components\Products\ProductsList.jsx"
)

$baseTemplate = @"
const {COMPONENT_NAME} = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">{COMPONENT_NAME}</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default {COMPONENT_NAME};
"@

foreach ($component in $components) {
    $componentName = (Split-Path $component -Leaf) -replace '\.jsx$', ''
    $content = $baseTemplate -replace '{COMPONENT_NAME}', $componentName
    
    $fullPath = "src\$component"
    $dir = Split-Path $fullPath -Parent
    
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    
    Set-Content -Path $fullPath -Value $content
    Write-Host "Created: $fullPath"
}
