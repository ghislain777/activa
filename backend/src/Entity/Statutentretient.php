<?php

namespace App\Entity;

use App\Repository\StatutentretientRepository;
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
 * @ORM\Entity(repositoryClass=StatutentretientRepository::class)
 */
class Statutentretient
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer" , options={"comment":"ID"})
     * @Groups({"lecture"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255 , options={"comment":"Nom"})
     * @Groups({"lecture", "ecriture"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Description"})
     * @Groups({"lecture", "ecriture"})
     */
    private $description;

    /**
     * @ORM\OneToMany(targetEntity=Appelsortant::class, mappedBy="statutentretient")
     */
    private $appelsortants;

    public function __construct()
    {
        $this->appelsortants = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection|Appelsortant[]
     */
    public function getAppelsortants(): Collection
    {
        return $this->appelsortants;
    }

    public function addAppelsortant(Appelsortant $appelsortant): self
    {
        if (!$this->appelsortants->contains($appelsortant)) {
            $this->appelsortants[] = $appelsortant;
            $appelsortant->setStatutentretient($this);
        }

        return $this;
    }

    public function removeAppelsortant(Appelsortant $appelsortant): self
    {
        if ($this->appelsortants->removeElement($appelsortant)) {
            // set the owning side to null (unless already changed)
            if ($appelsortant->getStatutentretient() === $this) {
                $appelsortant->setStatutentretient(null);
            }
        }

        return $this;
    }
}
