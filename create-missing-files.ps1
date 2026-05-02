# Create all missing pages and components for build success

# Simple page template
$pageTemplate = @"
const {PAGE_NAME} = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{PAGE_NAME}</h1>
      <p className="text-gray-600">
        Welcome to {PAGE_NAME}. This feature is currently under development.
      </p>
    </div>
  );
};

export default {PAGE_NAME};
"@

# Component template
$componentTemplate = @"
const {COMPONENT_NAME} = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">{COMPONENT_NAME}</h2>
      <p className="text-gray-600">Component under development.</p>
    </div>
  );
};

export default {COMPONENT_NAME};
"@

# Create pages
$pages = @(
    "Blogs",
    "Contact", 
    "NoPage",
    "Register",
    "Login",
    "Products",
    "ProfilePage",
    "Logout",
    "Account",
    "FindProfessionals",
    "ProfessionalRegistration"
)

foreach ($page in $pages) {
    $content = $pageTemplate -replace '{PAGE_NAME}', $page
    $path = "src\pages\$page.jsx"
    
    if (!(Test-Path $path)) {
        Set-Content -Path $path -Value $content
        Write-Host "Created page: $path"
    }
}

# Create missing components
$components = @(
    "components\Products\CategoriesLeft.jsx",
    "components\NavBar\NavBar.jsx"
)

foreach ($component in $components) {
    $componentName = (Split-Path $component -Leaf) -replace '\.jsx$', ''
    $content = $componentTemplate -replace '{COMPONENT_NAME}', $componentName
    
    $fullPath = "src\$component"
    $dir = Split-Path $fullPath -Parent
    
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    
    if (!(Test-Path $fullPath)) {
        Set-Content -Path $fullPath -Value $content
        Write-Host "Created component: $fullPath"
    }
}
