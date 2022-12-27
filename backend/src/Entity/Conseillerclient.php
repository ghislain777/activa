<?php

namespace App\Entity;
use App\Repository\ConseillerclientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * * @ApiResource(
   *   normalizationContext={"groups"={"lecture"}},
   *     denormalizationContext={"groups"={"ecriture"}},
   *     attributes={
   *         "pagination_client_items_per_page"=true,
   *         "order"={"id": "asc"}
   *     }
   * )
   * @ApiFilter(SearchFilter::class, properties={"id": "exact", "nom": "partial", "description": "partial"})
 * @ORM\Entity(repositoryClass=ConseillerclientRepository::class)
 */
class Conseillerclient
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer" , options={"comment":"ID"})
     * @Groups({"lecture"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255 , options={"comment":"Nom et prénoms"})
     * @Groups({"lecture", "ecriture"})
     */
    private $nometprenom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Téléphone"})
     * @Groups({"lecture", "ecriture"})
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Email"})
     * @Groups({"lecture", "ecriture"})
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Photo"})
     * @Groups({"lecture", "ecriture"})
     */
    private $photo;

    /**
     * @ORM\OneToMany(targetEntity=Appelentrant::class, mappedBy="conseillerclient")
     */
    private $appelentrants;

    public function __construct()
    {
        $this->appelentrants = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNometprenom(): ?string
    {
        return $this->nometprenom;
    }

    public function setNometprenom(string $nometprenom): self
    {
        $this->nometprenom = $nometprenom;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    /**
     * @return Collection|Appelentrant[]
     */
    public function getAppelentrants(): Collection
    {
        return $this->appelentrants;
    }

    public function addAppelentrant(Appelentrant $appelentrant): self
    {
        if (!$this->appelentrants->contains($appelentrant)) {
            $this->appelentrants[] = $appelentrant;
            $appelentrant->setConseillerclient($this);
        }

        return $this;
    }

    public function removeAppelentrant(Appelentrant $appelentrant): self
    {
        if ($this->appelentrants->removeElement($appelentrant)) {
            // set the owning side to null (unless already changed)
            if ($appelentrant->getConseillerclient() === $this) {
                $appelentrant->setConseillerclient(null);
            }
        }

        return $this;
    }
}
