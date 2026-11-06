$ErrorActionPreference = "Stop"
$headers = @{ "User-Agent" = "PavanCateringSite/1.0 (local image refresh; contact local)" }
$root = "d:\projects\pavan catering\public\images"
$log = New-Object System.Collections.Generic.List[string]

function Save-RealPhoto([string]$query, [string]$dest) {
  $q = [uri]::EscapeDataString("$query filemime:image/jpeg")
  $u = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=$q&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|mime|size|extmetadata&iiurlwidth=1600&format=json"
  $r = $null
  for ($try = 0; $try -lt 4; $try++) {
    try {
      $r = Invoke-RestMethod -Headers $headers -Uri $u
      break
    } catch {
      Start-Sleep -Seconds (8 * ($try + 1))
    }
  }
  if (-not $r) { throw "API failed for $query" }
  $pages = @()
  if ($r.query -and $r.query.pages) {
    $pages = @($r.query.pages.PSObject.Properties | ForEach-Object { $_.Value })
  }
  $pick = $null
  foreach ($p in ($pages | Sort-Object { -1 * [int]$_.imageinfo[0].width })) {
    $i = $p.imageinfo[0]
    if (-not $i) { continue }
    $title = [string]$p.title
    if ($title -match "svg|logo|icon|flag|map|diagram|chart|drawing|illustration|cartoon|poster|coat of arms|scan of|pdf") { continue }
    if ($i.mime -notin @("image/jpeg", "image/png", "image/webp")) { continue }
    if ([int]$i.width -lt 800) { continue }
    $lic = [string]$i.extmetadata.LicenseShortName.value
    if ($lic -notmatch "CC|Public|PDM") { continue }
    $pick = $p
    break
  }
  if (-not $pick) { throw "No photo for $query" }
  $info = $pick.imageinfo[0]
  $src = if ($info.thumburl) { $info.thumburl } else { $info.url }
  $tmp = "$dest.download"
  Invoke-WebRequest -Headers $headers -Uri $src -OutFile $tmp
  Move-Item $tmp $dest -Force
  $line = "{0} <= {1} ({2})" -f (Split-Path $dest -Leaf), $pick.title, $info.extmetadata.LicenseShortName.value
  $script:log.Add($line)
  Write-Output $line
  Start-Sleep -Milliseconds 1200
}

$jobs = @(
  @{ q = "indian wedding buffet vegetarian food"; f = "hero-buffet.jpg" },
  @{ q = "indian thali brass plate"; f = "intro-thali.jpg" },
  @{ q = "dal bati rajasthani thali"; f = "marwari.jpg" },
  @{ q = "jain food thali vegetarian"; f = "jain.jpg" },
  @{ q = "paneer butter masala with naan"; f = "north-indian.jpg" },
  @{ q = "indian wedding food catering servers"; f = "wedding-service.jpg" },
  @{ q = "indian wedding dinner table food"; f = "occasion-wedding.jpg" },
  @{ q = "indian sweets platter mithai"; f = "occasion-engagement.jpg" },
  @{ q = "indian vegetarian lunch table"; f = "occasion-birthday.jpg" },
  @{ q = "indian dinner thali two plates"; f = "occasion-anniversary.jpg" },
  @{ q = "indian prasad vegetarian meal"; f = "occasion-religious.jpg" },
  @{ q = "indian family meal thali"; f = "occasion-family.jpg" },
  @{ q = "indian buffet catering table"; f = "occasion-corporate.jpg" },
  @{ q = "indian sweets mithai box diwali"; f = "sweets-festive.jpg" },
  @{ q = "kulhad chai masala tea"; f = "chai-kulhad.jpg" },
  @{ q = "indian restaurant kitchen cooks"; f = "about-kitchen.jpg" },
  @{ q = "suji halwa sheera bowl"; f = "dishes\badam-sheera.jpg" },
  @{ q = "jalebi indian sweet"; f = "dishes\dudh-jalebi.jpg" },
  @{ q = "kaju katli cashew sweet"; f = "dishes\kaju-badam-fry.jpg" },
  @{ q = "dates fruit bowl"; f = "dishes\dates-ghee.jpg" },
  @{ q = "til chikki sesame brittle"; f = "dishes\til-papdi.jpg" },
  @{ q = "fafda gujarati snack"; f = "dishes\fafda.jpg" },
  @{ q = "mini idli south indian"; f = "dishes\button-idli.jpg" },
  @{ q = "medu vada"; f = "dishes\medu-vada.jpg" },
  @{ q = "poha indian breakfast"; f = "dishes\poha.jpg" },
  @{ q = "khakhra gujarati"; f = "dishes\khakhra.jpg" },
  @{ q = "bajra khichdi"; f = "dishes\bajri-khichdi.jpg" },
  @{ q = "strawberry milkshake glass"; f = "dishes\strawberry-shake.jpg" },
  @{ q = "pineapple juice glass"; f = "dishes\pineapple-juice.jpg" },
  @{ q = "paneer pakora"; f = "dishes\paneer-pakoda.jpg" },
  @{ q = "fried cheese balls"; f = "dishes\cheese-ball.jpg" },
  @{ q = "mathri indian snack"; f = "dishes\mathri.jpg" },
  @{ q = "samosa indian"; f = "dishes\matar-samosa.jpg" },
  @{ q = "indian namkeen mixture"; f = "dishes\dry-namkeen.jpg" },
  @{ q = "paneer tikka"; f = "dishes\paneer-shate.jpg" },
  @{ q = "vegetable manchow soup"; f = "dishes\manchow.jpg" },
  @{ q = "veg khow suey noodles"; f = "dishes\khowsuey.jpg" },
  @{ q = "pani puri golgappa"; f = "dishes\pani-puri.jpg" },
  @{ q = "papdi chaat"; f = "dishes\papdi-chaat.jpg" },
  @{ q = "cheese pizza"; f = "dishes\pizza-cheese.jpg" },
  @{ q = "ragda pattice chaat"; f = "dishes\ragda-pattice.jpg" },
  @{ q = "paneer butter masala"; f = "dishes\butter-paneer.jpg" },
  @{ q = "kachumber indian salad"; f = "dishes\salad.jpg" },
  @{ q = "kaju curry cashew indian"; f = "dishes\kaju-kair.jpg" },
  @{ q = "indian mixed vegetable sabzi"; f = "dishes\mogri-sabzi.jpg" },
  @{ q = "gujarati undhiyu"; f = "dishes\dhana-vadiya.jpg" },
  @{ q = "dal tadka bowl"; f = "dishes\dal-marwadi.jpg" },
  @{ q = "gatte ki sabzi"; f = "dishes\dudhi-gatta.jpg" },
  @{ q = "stuffed green chilli indian"; f = "dishes\mirchi-kuta.jpg" },
  @{ q = "phulka roti"; f = "dishes\phulka.jpg" },
  @{ q = "tandoori roti"; f = "dishes\tandoori-roti.jpg" },
  @{ q = "bajra roti"; f = "dishes\bajri-roti.jpg" },
  @{ q = "methi thepla"; f = "dishes\thepla.jpg" },
  @{ q = "vegetable pulao"; f = "dishes\matka-pulao.jpg" },
  @{ q = "boondi raita"; f = "dishes\raita.jpg" },
  @{ q = "wheat halwa lapsi"; f = "dishes\lapsi.jpg" },
  @{ q = "kaju katli"; f = "dishes\kaju-paan.jpg" },
  @{ q = "rabri indian sweet bowl"; f = "dishes\sitaphal-rabdi.jpg" },
  @{ q = "baklava pastry"; f = "dishes\baklava.jpg" },
  @{ q = "green grapes bowl"; f = "dishes\angoori.jpg" },
  @{ q = "indian milk sweet barfi"; f = "dishes\stick-sweet.jpg" },
  @{ q = "kalakand sweet"; f = "dishes\kalakand.jpg" },
  @{ q = "gulab jamun"; f = "dishes\gulab-jamun.jpg" },
  @{ q = "vanilla ice cream bowl"; f = "dishes\ice-cream.jpg" },
  @{ q = "fresh fruit platter"; f = "dishes\fruit-platter.jpg" },
  @{ q = "thatte idli plate"; f = "dishes\thatte-idli.jpg" },
  @{ q = "rasam south indian bowl"; f = "dishes\rasam.jpg" }
)

foreach ($job in $jobs) {
  $dest = Join-Path $root $job.f
  try {
    Save-RealPhoto $job.q $dest
  } catch {
    $script:log.Add("FAIL $($job.f): $($_.Exception.Message)")
    Write-Output "FAIL $($job.f): $($_.Exception.Message)"
  }
}

$log | Set-Content -Path (Join-Path $root "photo-sources.txt") -Encoding utf8
Write-Output "DONE $($jobs.Count)"
