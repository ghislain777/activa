<?php

namespace App\Entity;

use App\Repository\CategoriecontactRepository;
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
 * @ORM\Entity(repositoryClass=CategoriecontactRepository::class)
 */
class Categoriecontact
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
     * @ORM\OneToMany(targetEntity=Contact::class, mappedBy="categoriecontact")
     */
    private $contacts;

    /**
     * @ORM\OneToMany(targetEntity=Appelentrant::class, mappedBy="categoriecontact")
     */
    private $appelentrants;

    public function __construct()
    {
        $this->contacts = new ArrayCollection();
        $this->appelentrants = new ArrayCollection();
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
     * @return Collection|Contact[]
     */
    public function getContacts(): Collection
    {
        return $this->contacts;
    }

    public function addContact(Contact $contact): self
    {
        if (!$this->contacts->contains($contact)) {
            $this->contacts[] = $contact;
            $contact->setCategoriecontact($this);
        }

        return $this;
    }

    public function removeContact(Contact $contact): self
    {
        if ($this->contacts->removeElement($contact)) {
            // set the owning side to null (unless already changed)
            if ($contact->getCategoriecontact() === $this) {
                $contact->setCategoriecontact(null);
            }
        }

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
            $appelentrant->setCategoriecontact($this);
        }

        return $this;
    }

    public function removeAppelentrant(Appelentrant $appelentrant): self
    {
        if ($this->appelentrants->removeElement($appelentrant)) {
            // set the owning side to null (unless already changed)
            if ($appelentrant->getCategoriecontact() === $this) {
                $appelentrant->setCategoriecontact(null);
            }
        }

        return $this;
    }
}
